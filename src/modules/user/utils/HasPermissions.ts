export const hasPermissions = (
	userPermissions: string[],
	permissions: string[]
): boolean => {
	if (userPermissions.includes('ADMIN')) return true
	return permissions.some(permission => userPermissions.includes(permission))
}
