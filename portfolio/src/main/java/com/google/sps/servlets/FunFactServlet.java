
package com.google.sps.servlets;

import com.google.sps.data.ServerStats;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/fun-fact")
public class FunFactServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> funFacts = new ArrayList<String>();
    funFacts.add("I love dancing!");
    funFacts.add("I'm bad at cooking but LOVE eating");
    funFacts.add("I'm really bad in the kitchen");

    Gson gson = new Gson();
    String json = gson.toJson(funFacts);

    response.setContentType("application/json;");
    response.getWriter().println(json);

    

  }
  
}
