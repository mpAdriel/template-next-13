export interface UserDetailDTO {
	id: string
	createdAt: Date
	updatedAt: Date
	firstname: string
	lastname: string
	email: string
	permissions: string[]
}
