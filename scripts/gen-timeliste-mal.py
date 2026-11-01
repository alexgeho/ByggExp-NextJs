#!/usr/bin/env python3
"""Generate the Norwegian timesheet template served on byggexp.no.

Output: public/nb/maler/timeliste-mal.xlsx (linked from /nb/blog/timeliste-mal).
Run:    python3 scripts/gen-timeliste-mal.py   (needs openpyxl)

One sheet per week: header (navn, arbeidsgiver, uke, normal arbeidsdag), one
filled example row, empty rows, formulas for timer per dag, overtid, ukesum and
sum per prosjekt, plus signature lines. Fixed document timestamps so a re-run
gives the same file.
"""
from datetime import date, datetime, time
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.worksheet.datavalidation import DataValidation

OUT = Path(__file__).resolve().parent.parent / "public" / "nb" / "maler" / "timeliste-mal.xlsx"

BLUE = "2394FF"
LIGHT = "F1F6FB"
GREY = "94A8BC"
thin = Side(style="thin", color="D5DEE8")
BOX = Border(left=thin, right=thin, top=thin, bottom=thin)

wb = Workbook()
ws = wb.active
ws.title = "Timeliste"

ws["A1"] = "Timeliste"
ws["A1"].font = Font(size=18, bold=True)

meta = [("Navn", ""), ("Arbeidsgiver", ""), ("Uke", ""), ("Normal arbeidsdag (timer)", 7.5)]
for i, (label, value) in enumerate(meta, start=3):
    ws.cell(row=i, column=1, value=label).font = Font(bold=True)
    c = ws.cell(row=i, column=3, value=value if value != "" else None)
    c.border = BOX
    ws.merge_cells(start_row=i, start_column=1, end_row=i, end_column=2)
NORMAL = "$C$6"
ws["C6"].number_format = "0.0"

HEAD_ROW = 8
headers = ["Dato", "Prosjekt", "Arbeid utført", "Start", "Slutt", "Pause (min)", "Timer", "Overtid", "Merknad"]
widths = [12, 22, 30, 8, 8, 11, 9, 9, 26]
for col, (h, w) in enumerate(zip(headers, widths), start=1):
    c = ws.cell(row=HEAD_ROW, column=col, value=h)
    c.font = Font(bold=True, color="FFFFFF")
    c.fill = PatternFill("solid", fgColor=BLUE)
    c.alignment = Alignment(horizontal="center", vertical="center")
    c.border = BOX
    ws.column_dimensions[c.column_letter].width = w

FIRST = HEAD_ROW + 1
ROWS = 7  # one example row + six days
LAST = FIRST + ROWS - 1

example = [date(2026, 11, 2), "Eksempel: Bad Storgata 12", "Riving og avretting", time(7, 0), time(16, 0), 30, None, None, "Eksempel – skriv over"]
for r in range(FIRST, LAST + 1):
    for col in range(1, 10):
        c = ws.cell(row=r, column=col)
        c.border = BOX
        if r == FIRST and example[col - 1] is not None:
            c.value = example[col - 1]
            c.font = Font(italic=True, color="5A6B7D")
    ws.cell(row=r, column=1).number_format = "DD.MM.YYYY"
    ws.cell(row=r, column=4).number_format = "HH:MM"
    ws.cell(row=r, column=5).number_format = "HH:MM"
    # Timer = (slutt - start) i timer minus pause (MOD handles shifts past midnight).
    ws.cell(row=r, column=7, value=f'=IF(AND(D{r}<>"",E{r}<>""),ROUND(MOD(E{r}-D{r},1)*24-N(F{r})/60,2),"")')
    ws.cell(row=r, column=7).number_format = "0.00"
    # Overtid = timer utover normal arbeidsdag.
    ws.cell(row=r, column=8, value=f'=IF(G{r}="","",MAX(0,G{r}-{NORMAL}))')
    ws.cell(row=r, column=8).number_format = "0.00"
    for col in (7, 8):
        ws.cell(row=r, column=col).fill = PatternFill("solid", fgColor=LIGHT)

time_dv = DataValidation(type="time", operator="between", formula1="0", formula2="0.999988426")
time_dv.error = "Skriv klokkeslett som 07:00"
ws.add_data_validation(time_dv)
time_dv.add(f"D{FIRST}:E{LAST}")

SUM = LAST + 1
ws.cell(row=SUM, column=1, value="Sum uke").font = Font(bold=True)
for col, letter in ((7, "G"), (8, "H")):
    c = ws.cell(row=SUM, column=col, value=f"=SUM({letter}{FIRST}:{letter}{LAST})")
    c.font = Font(bold=True)
    c.number_format = "0.00"
for col in range(1, 10):
    ws.cell(row=SUM, column=col).border = BOX

# Sum per prosjekt (SUMIF) – skriv prosjektnavnet slik det står i tabellen.
P0 = SUM + 2
ws.cell(row=P0, column=1, value="Sum per prosjekt").font = Font(bold=True)
ws.cell(row=P0 + 1, column=2, value="Prosjekt").font = Font(bold=True)
ws.cell(row=P0 + 1, column=7, value="Timer").font = Font(bold=True)
ws.cell(row=P0 + 1, column=8, value="Overtid").font = Font(bold=True)
for i in range(3):
    r = P0 + 2 + i
    ws.cell(row=r, column=2, value="Eksempel: Bad Storgata 12" if i == 0 else None).border = BOX
    for col, letter in ((7, "G"), (8, "H")):
        c = ws.cell(row=r, column=col, value=f'=IF(B{r}="","",SUMIF($B${FIRST}:$B${LAST},B{r},{letter}${FIRST}:{letter}${LAST}))')
        c.number_format = "0.00"
        c.border = BOX

S0 = P0 + 7
for i, label in enumerate(["Signatur ansatt", "Signatur arbeidsleder"]):
    r = S0 + i * 2
    ws.cell(row=r, column=1, value=label).font = Font(bold=True)
    for col in range(3, 6):
        ws.cell(row=r, column=col).border = Border(bottom=Side(style="thin", color=GREY))
    ws.cell(row=r, column=7, value="Dato").font = Font(bold=True)
    ws.cell(row=r, column=8).border = Border(bottom=Side(style="thin", color=GREY))

ws.cell(row=S0 + 5, column=1, value="Mal fra byggexp.no").font = Font(size=9, color=GREY)

ws.freeze_panes = f"A{FIRST}"
ws.page_setup.orientation = "landscape"
ws.page_setup.fitToWidth = 1
ws.sheet_properties.pageSetUpPr.fitToPage = True
ws.print_area = f"A1:I{S0 + 5}"

fixed = datetime(2026, 11, 1, 12, 0, 0)
wb.properties.creator = "ByggExp"
wb.properties.title = "Timeliste-mal"
wb.properties.created = fixed
wb.properties.modified = fixed
wb.properties.lastModifiedBy = "ByggExp"
wb.calculation.fullCalcOnLoad = True  # no cached values from openpyxl

OUT.parent.mkdir(parents=True, exist_ok=True)
wb.save(OUT)
print(f"wrote {OUT}")
