import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discoever and Share
        </h1>
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center font-bold text-4xl">AI Powered Prompts</span>
        <p className="desc text-center">
            Prompty is open-source AI prompting tool for modern world to discover, create and share creative prompts. 
        </p>
        <Feed/>
    </section>
  )
}

export default Home