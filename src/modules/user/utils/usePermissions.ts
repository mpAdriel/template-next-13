import { useStore } from '@/modules/store'
import { hasPermissions } from './hasPermissions'

export const usePermissions = (permissions: string[]): boolean => {
	const userPermissions = useStore(
		store => store.UserState.userData.permissions
	)
	return hasPermissions(userPermissions, permissions)
}
