import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectDetails({params}) {
  const proejctID = params.id
  
 return (
    <ProjectDetail id={proejctID}/>
 ) 
}