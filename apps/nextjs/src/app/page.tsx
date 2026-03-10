import { TodaysSelectionSlider } from "./_components/todays-selection-slider";

export default function HomePage() {
  return (
    <main className="py-10 sm:py-14">
      <div className="container relative overflow-hidden">
        <TodaysSelectionSlider />
      </div>
    </main>
  );
}
