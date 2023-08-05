import Form from "@/components/auth/form";
import Header from "@/components/header";
import path from 'path'
import fsPromises from 'fs/promises';
export default function SignUp (props) {
    const {arr} = props
    if(!arr){
        return <div>Loading</div>
    }else{
        return (
            <>
                <Header signin={false}/>
            <Form signin={false} arr = {arr}/>
            </>
            )
    }x
};

export async function getServerSideProps(){
    const filePath = path.join(process.cwd(),"data","user.json")
    const data = await fsPromises.readFile(filePath);
    const arr = JSON.parse(data);
    
    return {
        props:{
            arr:arr
        }
    }
}



