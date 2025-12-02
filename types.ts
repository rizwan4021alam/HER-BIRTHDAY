export enum AppStep {
  Awakening = 1,
  Reflections = 2,
  Nature = 3,
  Wisdom = 4,
  Birthday = 5,
  NewYear = 6,
  Closing = 7
}

export interface StepProps {
  onNext: () => void;
  isActive: boolean;
}