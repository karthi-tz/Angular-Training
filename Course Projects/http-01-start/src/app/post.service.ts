import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {catchError, map, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {

  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStore(myTitle: string, myContent: string) {
    const postData: Post = { title: myTitle, content: myContent };
    this.http.post<{ name: string }>('https://ng-test-project-995a6-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      }
      ).subscribe(
      responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      }
    );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http.get<{ [key: string]: Post }>('https://ng-test-project-995a6-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-header': 'Terzo'}),
        params: searchParams,
        responseType: 'json'
      })
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key]});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // send to analytic server
          return throwError(errorRes);
        })
      );
  }

  clearPosts() {
    return this.http.delete('https://ng-test-project-995a6-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        //
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}
