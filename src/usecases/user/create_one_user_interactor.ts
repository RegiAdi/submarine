interface User {
  id: number,
  username: string,
  password: string,
  fullname: string,
  phone: string,
  address: string,
  createdAt: Date | null,
  updatedAt: Date | null,
  deletedAt: Date | null,
}

class CreateOneUser {}
