import { router } from 'expo-router'
import {Text,View,Button} from 'react-native'
const SignIn=()=>{
    return (
        <View>
            <Text>Sign In</Text>
            <Button title="Sign Up" onPress={()=>router.push("/sign-up")}/>
        </View>
    )
}
export default SignIn