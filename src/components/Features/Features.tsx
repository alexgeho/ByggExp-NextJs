import { useEffect, useState } from "react";
const shiftsExport = "/landing/features/shiftsExport.webp";
const tasks = "/landing/features/tasks.webp";
const live = "/landing/features/live.webp";
const photo = "/landing/features/photo.webp";
const planing = "/landing/features/planing.webp";
const tools = "/landing/features/tools.webp";
const offert = "/landing/features/offert.webp";
const invoice = "/landing/features/invoice.webp";
const project = "/landing/features/project.webp";

import type { FeaturesProps } from "../../types/features";

function Features({ featuresT1_3, featuresT4_6, featuresT7_9 }: FeaturesProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  return (
    <section className="features" id="features">
      <div className="container">
        {/* HEADER */}
        <div className="section-head">
          <span className="eyebrow">{featuresT1_3.featuresTitle}</span>

          <h2>
            {featuresT1_3.featuresHeading1}{" "}
            <em>{featuresT1_3.featuresHeadingAccent}</em>{" "}
            {featuresT1_3.featuresHeading2}
          </h2>

          <p className="section-sub">{featuresT1_3.featuresSub}</p>
        </div>

        {/* STEP 1*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT1_3.featuresCard1Title}</h3>

            <p className="step-text">{featuresT1_3.featuresCard1Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT1_3.featuresCard1Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT1_3.featuresCard1Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT1_3.featuresCard1Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(shiftsExport)}
                aria-label="Enlarge image"
              >
                <img src={shiftsExport} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 2*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT1_3.featuresCard2Title}</h3>

            <p className="step-text">{featuresT1_3.featuresCard2Text}</p>

              <ul className="step-bullets">
                <li>
                  <span className="number">1</span>
                  {featuresT1_3.featuresCard2Step1}
                </li>

                <li>
                  <span className="number">2</span>
                  {featuresT1_3.featuresCard2Step2}
                </li>

                <li>
                  <span className="number">3</span>
                  {featuresT1_3.featuresCard2Step3}
                </li>
              </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(tasks)}
                aria-label="Enlarge image"
              >
                <img src={tasks} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 3*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT1_3.featuresCard3Title}</h3>

            <p className="step-text">{featuresT1_3.featuresCard3Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT1_3.featuresCard3Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT1_3.featuresCard3Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT1_3.featuresCard3Step3}
              </li>


              {/* SKULL */}
              {/* <li>
                <span className="check">
                  <svg viewBox="0 0 14 10" fill="none">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m1 5 4 4 8-8"
                    />
                  </svg>
                </span>

                {featuresT1_3.featuresCard3Step3}

                <img src={skull} alt="" className="inline-skull" />
              </li> */}
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(live)}
                aria-label="Enlarge image"
              >
                <img src={live} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 4*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT4_6.featuresCard4Title}</h3>

            <p className="step-text">{featuresT4_6.featuresCard4Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT4_6.featuresCard4Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT4_6.featuresCard4Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT4_6.featuresCard4Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(photo)}
                aria-label="Enlarge image"
              >
                <img src={photo} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 5*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT4_6.featuresCard5Title}</h3>

            <p className="step-text">{featuresT4_6.featuresCard5Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT4_6.featuresCard5Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT4_6.featuresCard5Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT4_6.featuresCard5Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(planing)}
                aria-label="Enlarge image"
              >
                <img src={planing} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 6*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT4_6.featuresCard6Title}</h3>

            <p className="step-text">{featuresT4_6.featuresCard6Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT4_6.featuresCard6Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT4_6.featuresCard6Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT4_6.featuresCard6Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(tools)}
                aria-label="Enlarge image"
              >
                <img src={tools} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 7*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT7_9.featuresCard7Title}</h3>

            <p className="step-text">{featuresT7_9.featuresCard7Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT7_9.featuresCard7Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT7_9.featuresCard7Step2}
              </li>

               <li>
                <span className="number">3</span>
                {featuresT7_9.featuresCard7Step3}
              </li>

           
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(offert)}
                aria-label="Enlarge image"
              >
                <img src={offert} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 8*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT7_9.featuresCard8Title}</h3>

            <p className="step-text">{featuresT7_9.featuresCard8Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT7_9.featuresCard8Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT7_9.featuresCard8Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT7_9.featuresCard8Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(invoice)}
                aria-label="Enlarge image"
              >
                <img src={invoice} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* STEP 9*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT7_9.featuresCard9Title}</h3>

            <p className="step-text">{featuresT7_9.featuresCard9Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT7_9.featuresCard9Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT7_9.featuresCard9Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT7_9.featuresCard9Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <button
                type="button"
                className="image-zoom-trigger"
                onClick={() => setLightboxImage(project)}
                aria-label="Enlarge image"
              >
                <img src={project} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="image-lightbox"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Stäng"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="m5 5 14 14M19 5 5 19"
              />
            </svg>
          </button>

          <img
            src={lightboxImage}
            alt=""
            className="image-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Features;
