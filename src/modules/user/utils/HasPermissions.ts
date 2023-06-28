export const hasPermissions = (
	userPermissions: string[],
	permissions: string[]
): boolean => {
	if (permissions.length === 0) return true
	if (userPermissions.includes('ADMIN')) return true

	return permissions.some(permission => userPermissions.includes(permission))
}
