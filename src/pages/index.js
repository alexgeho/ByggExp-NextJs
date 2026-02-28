import HeroBlock from '@/Components/HeroBlock/HeroBlock';
import PhoneBlock from '@/Components/PhoneBlock/PhoneBlock';
import BlueBlock from '@/Components/BlueBlock/BlueBlock';
import TitleAndSubtitle from '@/Components/TitleAndSubtitle/TitleAndSubtitle';
import ContentBlocks from '@/Components/ContentBlocks/ContentBlocks';
import FAQBlock from '@/Components/FAQBlock/FAQBlock';

const phone2 = '/p2.png'
const phone3 = '/p3.png'
const phone4 = '/p4.png'
const phone5 = '/p5.png'


export default function HomePage() {
  return (
    <>
      <div className="HemPageDark">
        <HeroBlock />
      </div>

      <div className="HemPageLight d-flex flex-column justify-content-center align-items-center">
        <TitleAndSubtitle
          variant="whiteBackground"
          align="center"
          title={<>Save time, nerves, and money <br/>with ByggExp</>}
          subtitle=""
        />
        <PhoneBlock image={phone2} title="Auto Time Tracking" text="GPS-based check-in/check-out, automatic shift logs. Export to Excel in 3 clicks." />
        <PhoneBlock image={phone3} title="Photo Reports" text="Workers upload jobsite photos right in the app. You get instant proof of progress." reverse />
        <PhoneBlock image={phone4} title="Project info in one place" text="Tasks, drawings, and files stored per project. Everything in the right hands." />
        <PhoneBlock image={phone5} title="No mess, no distractions" text="Create project-specific groups, so conversations stay focused and nothing gets lost." reverse />
        <BlueBlock>
          <TitleAndSubtitle
            variant="blue"
            title={<>We'll build custom features<br/>specifically for your workflow</>}
            subtitle="Just tell us what your team needs — and we'll implement it shortly."
          />
        </BlueBlock>
      </div>

      <div className="HemPageDark">
        <ContentBlocks />
        <FAQBlock />
      </div>
    </>
  );
}