export class Contact {
  name!: string;
  avatar!: string;
  email!: string;
  phone!: string;

  constructor(obj: any = {}) {
    this.name = obj.name || '';
    this.avatar = obj.avatar || '';
    this.email = obj.email || '';
    this.phone = obj.phone || '';
  }
}
