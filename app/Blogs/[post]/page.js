import SAM from "components/SAM";
import Post from "components/Post";
import Blog from "components/Blog";
import PropertyListings from "components/PropertyListings";

export default function page() {
  const info = {
    title: " Automatic Watch",
    subtitle:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    description: "das",
    image:
      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
  };

  return (
    <main>
      <Post info={info} />
      <SAM />
      <PropertyListings />
      <Blog />
    </main>
  );
}
