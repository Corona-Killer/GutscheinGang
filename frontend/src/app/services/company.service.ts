import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  public getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(environment.apiUrl + '/company');
  }

  public getCompanyById(uuid: string): Observable<Company> {
    return this.http.get<Company>(environment.apiUrl + '/company/' + uuid);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(environment.apiUrl + '/company/' + company.uuid, company);
  }

  public createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(environment.apiUrl + '/company', company);
  }

  public deleteCompany(company: Company): Observable<any> {
    return this.http.delete<Company>(environment.apiUrl + '/company/' + company.uuid );
  }


}
