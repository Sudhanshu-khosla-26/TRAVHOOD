import { Link } from "react-router-dom"

const MidContent = () => {
    return (
        <>
            <div className="Content d-flex">
                <div className="box d-flex ">
                    <div className="Imagebox my-5">
                        <img className="Midimg" src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/india-city-palace-1537264288-735X412.jpg" alt="cont-img" target="" />
                    </div>
                    <div className="TextBox my-5">
                        Located on the banks of Lake Pichola within the old city, the City Palace is an architectural marvel. Inspired by a distinctive blend of medieval, European and Chinese architecture, it is encompassed by stunning courtyards, pavilions, terraces, corridors, towers, domes, arches and hanging gardens.
                        <br />
                        <br />
                        Built on granite and marble, the City Palace brings together eleven palaces from different rulers throughout history, extended and unified by various maharanas, into a unique artistic space that outlines the journey of the royal family throughout the years. From the crystal and porcelain statues of the Ruby Palace to the lavish decor of the Pearl Palace to the murals and wall paintings of the Palace of Joy — to walk through the City Palace is a spectacle in itself.
                        <br />
                        <br />
                        <Link className="d-flex justify-content-end" to="">Read More..</Link>
                    </div>
                    <div className="TextBox my-5 mx-5">
                        Located on the banks of Lake Pichola within the old city, the City Palace is an architectural marvel. Inspired by a distinctive blend of medieval, European and Chinese architecture, it is encompassed by stunning courtyards, pavilions, terraces, corridors, towers, domes, arches and hanging gardens.
                        <br />
                        <br />
                        Upon arriving, you’ll find four islands sitting on the great body of water, each carrying its own charm. Each island has different royal mansions, palaces, sanctuaries and monuments that add to the history of Udaipur.
                        <br />
                        <br />
                        <Link className="d-flex justify-content-start" to="">Read More..</Link>
                    </div>
                    <div className="Imagebox my-5 mx-3">
                        <img alt="cont-img"className="Midimg" src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/things-to-do-in-udaipur-pichola-1543299257-735X412.jpg" target="" />
                    </div>
                    <div className="Imagebox my-5">
                        <img alt="cont-img"className="Midimg" src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/udaipur-attraction-lake-palace-1543299671-735X412.jpg" target="" />
                    </div>
                    <div className="TextBox my-5">
                        Built with the intent to face the east and welcome dawn, the Lake Palace was created as a summer home for the royal family. Sitting calmly on the surface of Lake Pichola with regal courtyards, terraces, fountains and gardens, the Lake Palace was made for romance and celebration.
                        <br />
                        <br />
                        Through its doors, you’ll find a lily pond that covers most of the courtyard. Black and white marble line the courtyard walls and precious stones are etched into its interior. The Lake Palace now serves as a hotel, offering a taste of the luxury and royal treatment of the kingdom past. The rooms are lavish and grand, decorated with paintings, stone work and carved artifacts that will take you back to the palace’s royal days.
                        <br />
                        <br />
                        <Link className="d-flex justify-content-end" to="">Read More..</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MidContent
