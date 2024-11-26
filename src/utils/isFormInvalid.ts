/*-------------------------------------------------------------------
|  🐼 Function isFormInvalid
|
|  🐯 Purpose: CHECKS IF FORM IS VALID OR NOT
|
|  🐸 Returns:  OBJECT
*-------------------------------------------------------------------*/

export const isFormInvalid = (err: Record<string, string>) => {
  if (Object.keys(err).length > 0) return true;
  return false;
};
