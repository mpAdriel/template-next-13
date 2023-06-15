import { useStore } from '@/modules/store/useStore'

export const HasPermissions = (permissions: string[]): boolean => {
	const userPermission = useStore(store => store.UserState.userData.permissions)

	if (userPermission.includes('ADMIN')) return true
	return permissions.some(permission => userPermission.includes(permission))
}
