package org.example.Request;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class CallAPI {
    private final String URL;
    public CallAPI(String URL){
        this.URL=URL;
    }
    public String sendRequest() {
        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(URL))
                    .build();

            return client.send(request, HttpResponse.BodyHandlers.ofString()).body();
        }catch (Exception e){
            throw new RuntimeException();
        }
    }

}
