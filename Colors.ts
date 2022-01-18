import {Colors} from 'react-native-paper';

type AppColors = {
  cheapPriceBackground: string;
  expensivePriceBackground: string;
  neutralPriceBackgroundColor: string;
};

export const AppColors: AppColors = {
  cheapPriceBackground: Colors.green400,
  expensivePriceBackground: Colors.red400,
  neutralPriceBackgroundColor: Colors.cyan400,
};
