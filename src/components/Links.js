function Links(props){
    console.log(props["links"]["github"])
    const github_link = props["links"]["github"];
    const linkedin_link = props["links"]["linkedin"];
    return (
        <div>
            <h3>Links</h3>      
            <a href = {github_link}>{github_link}</a>
            <a href = {linkedin_link}>{linkedin_link}</a>
        </div>
    );
}
export default Links;