import { registerEnumType } from "type-graphql";

export enum Role {
  Admin = "admin",
  Maintainer = "maintainer",
  StandardUser = "standard-user"
}

registerEnumType(Role, {
  name: "Role",
  description: "Available user roles"
});
