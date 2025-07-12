/* const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

export default axiosInstance
 */
const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const API_URL = {
	PRODUCTS: `${BASE_URL}/products`,
	ID: (id: string) => `${BASE_URL}/products/${id}`
}
