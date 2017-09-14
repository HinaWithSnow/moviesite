import { Injectable } from '@angular/core';
import { Movie } from "app/Classes";

@Injectable()
export class MovieDataService {
  public movies: Array<Movie> = [];

  public GetGenres(): Array<string> {
    let list = [];
    this.movies.forEach(element => {
      element.Genre.forEach(g => {
        if (list.indexOf(g) < 0) {
          list.push(g);
        }
      });
    });
    return list;
  }

  constructor() {


    let dp: Movie = new Movie();
    dp.id = 1;
    dp.key = "deadpool";
    dp.name = "Deadpool";
    dp.description = "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.";
    dp.Genre = ["Action", "Adventure", "Comedy"];
    dp.rating = 8.6;
    dp.length = "1hr 48mins";
    dp.year = "2001";
    dp.picture = "./assets/images/movie-covers/deadpool.jpg";
    dp.Link = "movie/1";
    dp.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";


    let vrm: Movie = new Movie();
    vrm.id = 2;
    vrm.key = "we-are-the-millers";
    vrm.name = "We're the Millers";
    vrm.description = "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.";
    vrm.Genre = ["Crime", "Adventure", "Comedy"];
    vrm.rating = 7.0;
    vrm.length = "1hr 50mins";
    vrm.year = "2001";
    vrm.picture = "./assets/images/movie-covers/we-are-the-millers.jpg";
    vrm.Link = "movie/2";
    vrm.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let soc: Movie = new Movie();
    soc.id = 3;
    soc.key = "straight-outta-compton";
    soc.name = "Straight Outta Compton";
    soc.description = "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.";
    soc.Genre = ["Biography", "Drama", "History"];
    soc.rating = 8.0;
    soc.length = "2hr 27mins";
    soc.year = "2001";
    soc.picture = "./assets/images/movie-covers/straight-outta-compton.jpg";
    soc.Link = "movie/3";
    soc.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let gg: Movie = new Movie();
    gg.id = 4;
    gg.key = "gridiron-gang";
    gg.name = "Gridiron Gang";
    gg.description = "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.";
    gg.Genre = ["Crime", "Drama", "Sport"];
    gg.rating = 6.9;
    gg.length = "2hr 5mins";
    gg.year = "2001";
    gg.picture = "./assets/images/movie-covers/gridiron-gang.jpg";
    gg.Link = "movie/4";
    gg.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let ag: Movie = new Movie();
    ag.id = 5;
    ag.key = "american-gangster";
    ag.name = "American Gangster";
    ag.description = "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.";
    ag.Genre = ["Biography", "Crime", "Drama"];
    ag.rating = 7.8;
    ag.length = "2hr 37mins";
    ag.year = "2001";
    ag.picture = "./assets/images/movie-covers/american-gangster.jpg";
    ag.Link = "movie/5";
    ag.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let gs: Movie = new Movie();
    gs.id = 6;
    gs.key = "gangster-squad";
    gs.name = "Gangster Squad";
    gs.description = "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.";
    gs.Genre = ["Action", "Crime", "Drama"];
    gs.rating = 6.8;
    gs.length = "1hr 53mins";
    gs.year = "2001";
    gs.picture = "./assets/images/movie-covers/gangster-squad.jpg";
    gs.Link = "movie/6";
    gs.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let nucm: Movie = new Movie();
    nucm.id = 7;
    nucm.key = "now-you-see-me";
    nucm.name = "Now You See Me";
    nucm.description = "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.";
    nucm.Genre = ["Crime", "Mystery", "Thriller"];
    nucm.rating = 7.3;
    nucm.length = "1hr 55mins";
    nucm.year = "2001";
    nucm.picture = "./assets/images/movie-covers/now-you-see-me.jpg";
    nucm.Link = "movie/7";
    nucm.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let jw: Movie = new Movie();
    jw.id = 8;
    jw.key = "jurassic-world";
    jw.name = "Jurassic World";
    jw.description = "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attrAction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.";
    jw.Genre = ["Action", "Adventure", "Scifi"];
    jw.rating = 7.1;
    jw.length = "2hr 4mins";
    jw.year = "2001";
    jw.picture = "./assets/images/movie-covers/jurassic-world.jpg";
    jw.Link = "movie/8";
    jw.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let mi: Movie = new Movie();
    mi.id = 9;
    mi.key = "mission-impossible-rogue-nation";
    mi.name = "Mission: Impossible: Rogue Nation";
    mi.description = "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.";
    mi.Genre = ["Action", "Adventure", "Thriller"];
    mi.rating = 7.5;
    mi.length = "2hr 11mins";
    mi.year = "2001";
    mi.picture = "./assets/images/movie-covers/mission-impossible-rogue-nation.jpg";
    mi.Link = "movie/9";
    mi.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let mfu: Movie = new Movie();
    mfu.id = 10;
    mfu.key = "the-man-from-uncle";
    mfu.name = "The Man from U.N.C.L.E.";
    mfu.description = "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.";
    mfu.Genre = ["Action", "Adventure", "Thriller"];
    mfu.rating = 7.3;
    mfu.length = "1hr 56mins";
    mfu.year = "2001";
    mfu.picture = "./assets/images/movie-covers/the-man-from-uncle.jpg";
    mfu.Link = "movie/10";
    mfu.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";


    let l: Movie = new Movie();
    l.id = 11;
    l.key = "legend";
    l.name = "Legend";
    l.description = "The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British History, and their organised Crime empire in the East End of London during the 1960s.";
    l.Genre = ["Biography", "Crime", "Drama"];
    l.rating = 7.0;
    l.length = "2hr 28mins";
    l.year = "2001";
    l.picture = "./assets/images/movie-covers/legend.jpg";
    l.Link = "movie/11";
    l.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";

    let sp: Movie = new Movie();
    sp.id = 12;
    sp.key = "southpaw";
    sp.name = "Southpaw";
    sp.description = "Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.";
    sp.Genre = ["Action", "Drama", "Sport"];
    sp.rating = 7.5;
    sp.length = "2hr 4mins";
    sp.year = "2001";
    sp.picture = "./assets/images/movie-covers/southpaw.jpg";
    sp.Link = "movie/12";
    sp.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";


    let bof: Movie = new Movie();
    bof.id = 13;
    bof.key = "bridge-of-spies";
    bof.name = "Bridge of Spies";
    bof.description = "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.";
    bof.Genre = ["Biography", "Drama", "Thriller"];
    bof.rating = 7.7;
    bof.length = "2hr 22mins";
    bof.year = "2001";
    bof.picture = "./assets/images/movie-covers/bridge-of-spies.jpg";
    bof.Link = "movie/13";
    bof.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";


    let am: Movie = new Movie();
    am.id = 14;
    am.key = "ant-man";
    am.name = "Ant-Man";
    am.description = "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.";
    am.Genre = ["Action", "Adventure", "Scifi"];
    am.rating = 7.4;
    am.length = "1hr 57mins";
    am.year = "2001";
    am.picture = "./assets/images/movie-covers/ant-man.jpg";
    am.Link = "movie/14";
    am.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";


    let ff: Movie = new Movie();
    ff.id = 15
    ff.key = "fast-and-furious-7";
    ff.name = "Fast & Furious 7";
    ff.description = "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.";
    ff.Genre = ["Action", "Crime", "Thriller"];
    ff.rating = 7.3;
    ff.length = "1hr 57mins";
    ff.year = "2001";
    ff.picture = "./assets/images/movie-covers/fast-and-furious-7.jpg";
    ff.Link = "movie/15";
    ff.Summary = "Movie One descriptionMovie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description.Movie One description";


    

    this.movies.push(dp);
    this.movies.push(vrm);
    this.movies.push(soc);
    this.movies.push(gg);
    this.movies.push(ag);
    this.movies.push(gs);
    this.movies.push(nucm);
    this.movies.push(mi);
    this.movies.push(mfu);
    this.movies.push(l);
    this.movies.push(sp);
    this.movies.push(bof);
    this.movies.push(am);
    this.movies.push(ff);
  }


}
