package com.apurva;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloServerlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Hello from Jenkins Maven WAR Project!</h1>");
    }
}
