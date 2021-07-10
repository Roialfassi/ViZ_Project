/**
 * Linechart Module
 */
 var Quotes = (function(){
    // http://localhost/ViZ_Project/ourtry/

   var quotes=
   [{Year: 1961, Quote: "human beings are now carrying out a large-scale geophysical experiment of a kind that could not have happened in the past nor be reproduced in the future", Author: "Hans Suess"},
    {Year: 1962, Quote: "But man is a part of nature, and his war against nature is inevitably a war against himself.", Author: "Rachel Carson"},
    {Year: 1963, Quote: "Global warming isn't real because I was cold today! Also great news: World hunger is over because I just ate.", Author: "Stephen Colbert"},
    {Year: 1964, Quote: "When the well is dry we will know the worth of water", Author: "Banjamin Franklin"},
    {Year: 1965, Quote: "We should be focused on magnificently clean and healthy air and not distracted by the expensive hoax that is global warming!", Author: "Donald Trump"},
    {Year: 1966, Quote: "Climate change is no longer some far-off problem it is happening here, it is happening now", Author: "Barack Obama"},
    {Year: 1967, Quote: "Climate change is no longer some far-off problem it is happening here, it is happening now", Author: "Dr. Martin Luther King, Jr."},
    {Year: 1968, Quote: "It really boils down to this: that all life is interrelated. We are all caught in an inescapable network of mutuality, tied into a single garment of destiny. Whatever affects one destiny, affects all indirectly.", Author: "William H. Stewart"},
    {Year: 1969, Quote: "Before the breathing air is gone,Before the sun is just a bright spot in the nighttime.", Author: "Paul Williams and Roger Nichols"},
    {Year: 1970, Quote: "The Congress, the Administration and the public all share a profound commitment to the rescue of our natural environment, and the preservation of the Earth as a place both habitable by and hospitable to man", Author: " Richard Nixon"},
    {Year: 1971, Quote: "High quality water is more than the dream of the conservationists, more than a political slogan; high quality water, in the right quantity at the right place at the right time, is essential to health, recreation, and economic growth", Author: "Edmund S. Muskie"},
    {Year: 1972, Quote: "We have forgotten how to be good guests, how to walk lightly on the earth as its other creatures do", Author: "Barbara Ward"},
    {Year: 1973, Quote: "We will look upon the earth and her sister planets as being with us, not for us.", Author: "Mary Daly"},
    {Year: 1974, Quote: "nuclear weapons were effectively banned and the weapons of mass destruction were those of environmental catastrophe", Author: "Lyndon Johnson, MacDonald"},
    {Year: 1975, Quote: "City farming is not only possible, it is the very definition of the kind of meaningful, sustainable innovation we will need to meet the grand challenges of the 21st century: climate change; population growth; ageing population; urbanization; rising demand for energy, food and water; poverty; and access to healthcare.", Author: "Frans van Houten"},
    {Year: 1976, Quote: "Our economic system, run for profit and waste and based primarily on the extractive industries, is the cause of climate change. We have wasted the earth's treasure and we can no longer exploit it cheaply.", Author: "Vivienne Westwood"},
    {Year: 1977, Quote: "Anyone who denies reality of climate change is ‘not being reasonable", Author: "Jeff Bezos"},
    {Year: 1978, Quote: "We're not at the point of trying to stop global warming; it's too late for that. We're trying to keep it from becoming a complete and utter calamity", Author: "Bill McKibben"},
    {Year: 1979, Quote: "Ice storm rolls from Texas to Tennessee – I’m in Los Angeles and it’s freezing. Global warming is a total, and very expensive, hoax!", Author: "Donald Trump"},
    {Year: 1980, Quote: "The belief that we can manage the Earth and improve Nature is probably the biggest expression of human pride, but it has deep roots in the past and is almost univers", Author: "René Dubos"},
    {Year: 1981, Quote: "You cannot affirm the power plant and condemn the smokestack, or affirm the smoke and condemn the cough", Author: "Wendell Berry"},
    {Year: 1982, Quote: "There can be no more important or conservative concern than the protection of the globe itself", Author: "Malcolm Forbes Baldwin"},
    {Year: 1983, Quote: "This is an immense reserve of natural gas, but it is 70% CO2", Author: "Exxon"},
    {Year: 1984, Quote: "Preservation of our environment is not a liberal or conservative challenge; it's common sense", Author: "Ronald Reagan"},
    {Year: 1985, Quote: "Could reporters stop asking if political leaders believe in climate change and start asking if they understand it instead", Author: "Megan Collins"},
    {Year: 1986, Quote: "I care about climate change because of our children. I want to safeguard their future.", Author: "Cate Blanchett"},
    {Year: 1987, Quote: "Change or be changed, right? And what we mean by that is that climate change, if we don't change course, if we don't change our political and economic system, is going to change everything about our physical world.", Author: "Naomi Klein"},
    {Year: 1988, Quote: "If I were ever abducted by aliens, the first thing I’d ask is whether they came from a planet where people also deny science.", Author: "Neil deGrasse Tyson"},
    {Year: 1989, Quote: "Climate change, if unchecked, is an urgent threat to health, food supplies, biodiversity, and livelihoods across the globe.", Author: "John F. Kerry"},
    {Year: 1990, Quote: "A healthy ecology is the basis for a healthy economy.", Author: "Claudine Schneider"},
    {Year: 1991, Quote: "I believe global warming and climate change are real threats to our planet.", Author: "Andrew Cuomo"},
    {Year: 1992, Quote: "Sustainable development - development that does not destroy or undermine the ecological, economic, or social basis on which continued development depends - is the only viable pathway to a more secure and hopeful future for rich and poor alike.", Author: "Maurice Strong"},
    {Year: 1993, Quote: "If you really think that the environment is less important than the economy, try holding your breath while you count your money.", Author: "Guy McPherson"},
    {Year: 1994, Quote: "Is it Hot in here or is it global warming?", Author: "Roi Alfassi"},
    {Year: 1995, Quote: "Storming a football field to protest climate change, because that makes total sense, right? Wrong", Author: "Tomi Lahren"},
    {Year: 1996, Quote: "I'm anti-tax, but I'm pro-carbon tax.", Author: "Elon Musk"},
    {Year: 1997, Quote: "Please, come to Franc You are welcome, it’s your nation. We like innovation, we want innovative people, we want people working on climate change, energy, renewables and new technologies. France is your nation", Author: "Emmanuel Macron"},
    {Year: 1998, Quote: "The weight of our civilization has become so great, it now ranks as a global force and a significant wild card in the human future along with the Ice Ages and other vicissitudes of a volatile and changeable planetary system", Author: "Dianne Dumanoski"},
    {Year: 1999, Quote: "I would like to see a future where artists think that they have a right to contemplate things like global warming.", Author: "Brian Eno"},
    {Year: 2000, Quote: "We see incredible opportunity to solve some of the biggest social challenges we have by combining high-performance computing and AI - such as climate change and more.", Author: "Lisa Su"},
    {Year: 2001, Quote: "Good stewardship of the environment is not just a personal responsibility, it is a public value... Our duty is to use the land well, and sometimes not to use it at all. This is our responsibility as citizens, but more than that, it is our calling as stewards of the earth", Author: "George W. Bush"},
    {Year: 2002, Quote: "Climate change is crap.", Author: "Tony Abbott"},
    {Year: 2003, Quote: "For many of us, water simply flows from a faucet, and we think little about it beyond this point of contact. We have lost a sense of respect for the wild river", Author: " for the complex workings of a wetland"},
    {Year: 2004, Quote: "Climate change is not just about carbon dioxide levels and melting polar ice caps. It is about our public health and protecting our Earth for future generations.", Author: "Mike Quigley"},
    {Year: 2005, Quote: "Climate change is real, caused by human activity and already devastating our nation and planet. The United States must lead the world in combating climate change and transforming our energy system away from fossil fuels and toward energy efficiency and sustainability.", Author: "Bernie Sanders"},
    {Year: 2006, Quote: "Climate change is sometimes misunderstood as being about changes in the weather. In reality it is about changes in our very way of life", Author: "Paul Polman"},
    {Year: 2007, Quote: "The idea that the Arctic ice is disappearing is nonsense", Author: "Ben Shapiro"},
    {Year: 2008, Quote: "Climate change is a terrible problem, and it absolutely needs to be solved. It deserves to be a huge priority.", Author: "Bill Gates"},
    {Year: 2009, Quote: "For the first time in nearly a decade, we can look to the future with a sense of hope that the enormous environmental challenges we face will begin to be addressed and that our air, land, water, and wildlife – and the overall health of our planet – will not be sacrificed to appease polluting industries and campaign contributors.", Author: "Barack Obama"},
    {Year: 2010, Quote: "The earth is warming; it’s warming because of human activity, and the impact is bad and will get much worse. We have every reason to believe that at some point the impact will be catastrophic", Author: "Bill Gates"},
    {Year: 2011, Quote: "Climate change is a planetary crisis. Our task is clear. We must dramatically reduce greenhouse gas emissions", Author: "Bernie Sanders"},
    {Year: 2012, Quote: "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.", Author: "Donald Trump"},
    {Year: 2013, Quote: "Ice storm rolls from Texas to Tennessee - I’m in Los Angeles and it’s freezing. Global warming is a total, and very expensive, hoax!", Author: "Donald Trump"},
    {Year: 2014, Quote: "We’re showing that there’s no excuse for other nations to come together, both developed and developing, to achieve a strong global climate agreement next year", Author: "Barack Obama"},
    {Year: 2015, Quote: "Part of what’s unique about climate change, though, is the nature of some of the opposition to action.  It’s pretty rare that you’ll encounter somebody who says the problem you’re trying to solve simply doesn’t exist. ", Author: "Barack Obama"},
    {Year: 2016, Quote: "If you do not believe in climate change, you do not believe in facts or in science or empirical truths, and therefore, in my humble opinion, should not be allowed to hold public office.", Author: "Leonardo DiCaprio"},
    {Year: 2017, Quote: "As the nation at last confronts global warming, it is no time for denial, greed, cynicism or pessimism", Author: "Bernie Sanders"},
    {Year: 2018, Quote: "There is a cooling, and there’s a heating. I mean, look, it used to not be climate change, it used to be global warming. That wasn’t working too well because it was getting too cold all over the place.", Author: "Donald Trump"},
    {Year: 2019, Quote: "Climate change is very important to me. I’ve done many environmental impact statements in my life, and I believe very strongly in very, very crystal clear clean water and clean air", Author: "Donald Trump"}]


    var use = function() {
     
        return quotes[yearFilter.initial-1961]["Quote"] + "\n -<strong>"+  quotes[yearFilter.initial-1961]["Author"]+"</strong>" ;
    }  




    return {
        use:use
        // update:update
    };
    
})();

