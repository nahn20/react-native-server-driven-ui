import { Text, View } from "react-native-server-driven-ui/server/react-native";

const helloName = async (req: Request): Promise<Response> => {
	const url = new URL(req.url);
	const name = url.searchParams.get("name") ?? "unknown";

	const res = (
		<View>
			<Text>Hello {name}</Text>
		</View>
	);

	return new Response(JSON.stringify(res));
};
export default helloName;
