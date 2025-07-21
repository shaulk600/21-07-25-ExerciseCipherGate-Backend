import { getUser } from "../dals/securityDal.js";

export async function getLoginDetailsS(user_name = null, password = null) {
    try {
        if (!user_name || !password) {
            return { error: '' };
        }


        const users = await getUser();
        if (!users) {
            return { error: 'get user' };
        }
        if (Array.isArray(users)) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].user_name === user_name && users[i].password === password) {
                    return { userApproved: true };
                }
            }
            return { userApproved: false };
        }


        return { message: "Login successful", user };
    } catch (error) {
        console.error("Error in getLoginDetails:", error);
        return null;
    }

}
