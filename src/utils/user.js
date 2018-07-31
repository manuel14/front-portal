export const MULTI_STORE_ROLE = 'Customer Portal Multi-Store User';

export function isMultiStoreUser(user) {
  return user.role.includes(MULTI_STORE_ROLE);
}
