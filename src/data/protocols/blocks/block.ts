import { DecorableText } from './decorable-text';

export type Block = {
  id: string;
  type: string;
  children: Block[];
  properties: Record<string, string>;
  decorableTexts: DecorableText[];
};