const BASE_URL = 'http://localhost:8080/api/v1';

export const USER_API = {
    REGISTER_API: `${BASE_URL}/auth/register`,
    REGISTER_TEACHER_API: `${BASE_URL}/teacher`,
    LOGIN_API : `${BASE_URL}/auth/signIn`,
    BY_GOOGLE : `${BASE_URL}/auth/google`,
}