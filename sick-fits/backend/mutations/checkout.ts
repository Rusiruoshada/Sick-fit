/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { OrderCreateInput } from '../.keystone/schema-types';

interface Arguments {
  token: string
}

async function checkout(
  root: any,
  { token }:Arguments,
  context: KeystoneContext
): Promise<OrderCreateInput> {}

export default checkout;
