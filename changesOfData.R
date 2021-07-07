library(tidyverse)

countries.info <-as_tibble(read.csv("firstData.csv", header=T))
dictionary <- as_tibble(read.csv("dictionary.csv", header=T))

countries.info<- countries.info %>% 
  left_join(dictionary, by = c("Area" = "CountryName"))%>%
  filter(CountryCode != "NA")
write.csv(countries.info, "countriesWithCountryCode.csv")