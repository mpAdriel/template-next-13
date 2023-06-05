
export const hasPermission = async (userPermissions: string[], permission: string) => {
  return userPermissions.includes(permission)
}
