import { ChartDurationIncrements } from '../ChartDurationIncrements';

export const mapDurationIncrementToDaysParam = (
  increment: ChartDurationIncrements
): string => {
  switch (increment) {
    default:
    case ChartDurationIncrements.DAY:
      return '1';
    case ChartDurationIncrements.TWO_WEEKS:
      return '14';
    case ChartDurationIncrements.MONTH:
      return '30';
    case ChartDurationIncrements.THREE_MONTHS:
      return '90';
    case ChartDurationIncrements.YEAR:
      return '365';
    case ChartDurationIncrements.LIFETIME:
      return 'max';
  }
};
