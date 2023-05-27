import { list } from '@keystone-next/keystone/schema';
import {
  integer,
  relationship,
  select,
  text,
  virtual,
} from '@keystone-next/fields';
import formatMoney from '../lib/formatMoney';

export const Order = list({
  fields: {
    label: virtual({
      graphQLReturnType: 'string',
      resolver(items) {
        return `Item: ${formatMoney(items.total)}`;
      },
    }),
    total: integer(),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    user: relationship({ ref: 'User.orders' }),
    charge: text(),
  },
});
