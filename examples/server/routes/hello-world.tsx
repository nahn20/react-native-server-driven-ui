import { Text, View } from "react-native-server-driven-ui/server/react-native";

const helloWorld = async (req: Request): Promise<Response> => {
	const res = (
		<View>
			<Text testID="1234">Hello world</Text>
			<Text testID="1234">Hello world</Text>
		</View>
	);

	return new Response(JSON.stringify(res));
};
export default helloWorld;
