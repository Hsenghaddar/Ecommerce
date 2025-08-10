import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  private catApiUrl="http://localhost:500/categories"
  private proApiUrl="http://localhost:500/products"
  private cartApiUrl="http://localhost:500/cart"
  getCat():Observable<any>{
    return this.http.get<any>(this.catApiUrl)
  }
  getpro():Observable<any>{
    return this.http.get<any>(this.proApiUrl)
  }
  addcart(item:any):Observable<any>{
    return this.http.post<any>(this.cartApiUrl,item)
  }
  getcart():Observable<any>{
    return this.http.get<any>(this.cartApiUrl)
  }
  updateCart(item: any):Observable<any>{
    const url=`${this.cartApiUrl}/${item.id}`;
    return this.http.put<any>(url,item);
  }
  deleteCart(item:any){
    const url=`${this.cartApiUrl}/${item.id}`;
    return this.http.delete<any>(url,item);
  }
}
