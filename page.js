//The following code is a functional component called Page. It renders a layout for the page and includes the FileUpload component inside it. 


//The FileUpload component is imported from the "../components/FileUpload" file.
import FileUpload from "../components/FileUpload";


//The Page functional component is defined.
//Then, the Page component is exported as the default export of the module.
export default function Page() {
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-black">
            <div className="block w-4/5 h-4/5 bg-slate-900 border-cyan-300 border p-10">
                <FileUpload></FileUpload>
            </div>
        </div>
    )
}