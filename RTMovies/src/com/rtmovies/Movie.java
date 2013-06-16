package com.rtmovies;

import java.util.ArrayList;
import java.util.Map;

public class Movie {

	public Movie() {

	}

	String id;
	String title;
	int year;
	String mpaa_rating;
	int runtime;
	String critics_consensus;
	Map<String, String> release_dates;
	Rating ratings;
	Map<String, String> posters;
	ArrayList<Actor> abridged_cast;
	String synopsis;

	Map<String, String> links;

}
