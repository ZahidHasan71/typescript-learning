//as constant assertion

// type UserRole = 'admin' | 'moderator' | 'user';
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
} as const;

const canEdit = (role: keyof typeof UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
}

const editParmition = canEdit(UserRoles.Admin);
console.log(editParmition);