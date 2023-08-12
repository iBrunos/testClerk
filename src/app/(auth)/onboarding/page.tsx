import { UserButton } from "@clerk/nextjs";
import Menubar from '../../../components/shared/menubar/Menubar'
import CreateCampaign from '../../../components/shared/createCampaign/CreateCampaign';
import Campaigns from '../../../components/shared/campaigns/Campaigns';


async function Page() {
    return(
        <main className="flex bg-[#595959] h-[58rem]">
         <Menubar />
         <div className="ml-20 mt-2">
             <CreateCampaign />
             <div className="mt-4">
                 <Campaigns />
             </div>
         </div>
        
        </main>

    ) 
}

export default Page;