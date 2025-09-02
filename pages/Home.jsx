import StarBackground from "../src/components/StarBackground";
import ThemeToggle from "../src/components/ThemeToggle";
import Navbar from "../src/components/Navbar";



const  Home=()=>{
    return(

        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle*/}

            <ThemeToggle/>


            {/* Background Effects */}

            <StarBackground/>


            {/*  Navbar*/}

            <Navbar/>


            {/* Main Content */}


            {/* Footer */}

        </div>
    )
}

export default  Home;