import React, { useState } from "react";
import Axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { API_KEY } from "./constants";
import { PdfDocument } from "./Movie";

const years = [
  { value: "2010", text: "2010" },
  { value: "2011", text: "2011" },
  { value: "2012", text: "2012" },
  { value: "2013", text: "2013" },
  { value: "2014", text: "2014" },
  { value: "2015", text: "2015" },
  { value: "2016", text: "2016" },
  { value: "2017", text: "2017" },
  { value: "2018", text: "2018" },
  { value: "2019", text: "2019" }
];

export default function MovieList() {
  const [year, setYear] = useState("");
  const [movieDetails, setDetails] = useState([]);
  const [show, setHide] = useState(false);

  const fetchMovie = async e => {
    setYear(e.target.value);
    try {
      let res = await Axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${year}&sort_by=vote_average.desc`
      );
      setDetails(res.data.results);
      setHide(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Best movies of the year</h2>
      <label htmlFor="movies">Select Year</label>
      <select id="movies" className="select" onChange={fetchMovie}>
        <option defaultValue="" disabled>
          Select your option
        </option>
        {years.map((year, index) => {
          return (
            <option key={index} value={year.value}>
              {year.text}
            </option>
          );
        })}
      </select>
      {show && (
        <PDFDownloadLink
          document={<PdfDocument data={movieDetails} />}
          fileName="movielist.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}



import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";
import moment from "moment";

const POSTER_PATH = "https://image.tmdb.org/t/p/w154";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  movieContainer: {
    backgroundColor: "#f6f6f5",
    display: "flex",
    flexDirection: "row",
    padding: 5
  },
  movieDetails: {
    display: "flex",
    marginLeft: 5
  },
  movieTitle: {
    fontSize: 15,
    marginBottom: 10
  },
  movieOverview: {
    fontSize: 10
  },

  image: {
    height: 200,
    width: 150
  },
  subtitle: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 150,
    alignItems: "center",
    marginBottom: 12
  },
  vote: {
    display: "flex",
    flexDirection: "row"
  },
  rating: {
    height: 10,
    width: 10
  },
  vote_text: {
    fontSize: 10
  },
  vote_pop: {
    fontSize: 10,
    padding: 2,
    backgroundColor: "#61C74F",
    color: "#fff"
  },
  vote_pop_text: {
    fontSize: 10,
    marginLeft: 4
  },
  overviewContainer: {
    minHeight: 110
  },
  detailsFooter: {
    display: "flex",
    flexDirection: "row"
  },
  lang: {
    fontSize: 8,
    fontWeight: 700
  },
  vote_average: {
    fontSize: 8,
    marginLeft: 4,
    fontWeight: "bold"
  }
});

export function PdfDocument(props) {
  console.log("pdf props", props.data);
  return (
    <Document>
      <Page style={styles.page}>
        {props.data
          ? props.data.map((a, index) => {
              return (
                <View key={index} style={styles.movieContainer}>
                  <Image
                    style={styles.image}
                    source={
                      a.poster_path !== null
                        ? `${POSTER_PATH}${a.poster_path}`
                        : "150.jpg"
                    }
                  />
                  <View style={styles.movieDetails}>
                    <Text style={styles.movieTitle}>{a.title}</Text>
                    <View style={styles.subtitle}>
                      <View style={styles.vote}>
                        <Image source="star.png" style={styles.rating} />
                        <Text style={styles.vote_text}>{a.vote_count}</Text>
                      </View>
                      <View style={styles.vote}>
                        <Text style={styles.vote_pop}>{a.popularity}</Text>
                        <Text style={styles.vote_pop_text}>Popularity</Text>
                      </View>
                    </View>
                    <View style={styles.overviewContainer}>
                      <Text style={styles.movieOverview}>{a.overview}</Text>
                    </View>
                    <View style={styles.detailsFooter}>
                      <Text style={styles.lang}>
                        Language: {a.original_language.toUpperCase()}
                      </Text>
                      <Text style={styles.vote_average}>
                        Average Votes: {a.vote_average}
                      </Text>
                      <Text style={styles.vote_average}>
                        Release Date:{" "}
                        {moment(a.release_date, "YYYY-MM-DD").format(
                          " MMMM D Y"
                        )}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })
          : ""}
      </Page>
    </Document>
  );
}
