package com.rtmovies;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Date;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.urlfetch.HTTPResponse;
import com.google.appengine.api.urlfetch.URLFetchService;
import com.google.appengine.api.urlfetch.URLFetchServiceFactory;
import com.google.gson.Gson;
import com.rtmovies.model.MovieList;

@SuppressWarnings("serial")
public class RTMoviesServlet extends HttpServlet {
	String apikey = "yf36c5nenta98kdudtuz82v2&q";
	String url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=50&country=de&apikey=";
	long militimeoflastrequest = 0;
	HTTPResponse lastresponse = null;
	URLFetchService fetcher;

	public RTMoviesServlet() {

		fetcher = URLFetchServiceFactory.getURLFetchService();
		getMovies();
	}

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		getMovies();
		if (lastresponse != null) {
			byte[] bytearray = lastresponse.getContent();
			String responsecontent = new String(bytearray);
			Gson gson = new Gson();

			MovieList boxoffice = gson.fromJson(responsecontent,
					MovieList.class);

			resp.getWriter().write(gson.toJson(boxoffice));

		} else {
			resp.getWriter().write("test");
		}

	}

	public HTTPResponse getMovies() {
		long timedelta = new Date().getTime() - militimeoflastrequest;
		if (timedelta > 60000) {
			try {
				this.lastresponse = fetcher.fetch(new URL(url + apikey));
			} catch (MalformedURLException e) {

				e.printStackTrace();
			} catch (IOException e) {

				e.printStackTrace();
			} finally {
				militimeoflastrequest = new Date().getTime();
			}
		}
		return lastresponse;
	}
}
