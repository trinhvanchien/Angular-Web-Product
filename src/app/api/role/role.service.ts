import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import Role from '../../models/Role';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable()
export class RoleService extends BaseService {
  public url = '/api/v1/roles';
  public model = Role;

  listWithPermission(params) {
    return this.http.post(this.apiUrl.getApiUrl(`${this.url}/list?includes=permissions`), JSON.stringify(params)).pipe(
      map(result => _.map((result as any).data, item => new Role(item))),
      catchError(error => {
        throw error;
      })
    );
  }

  setAllPermissionsRole(roleId, permissions): Observable<any> {
    return this.http.put(this.apiUrl.getApiUrl(this.url) + `/${roleId}/permissions`, permissions).pipe(
      map(result => {}),
      catchError(error => {
        throw error;
      })
    );
  }

  detach(roleId, permission): Observable<any> {
    return this.http
      .request('delete', this.apiUrl.getApiUrl(this.url) + `/${roleId}/permissions`, {
        body: permission
      })
      .pipe(
        tap(result => {}),
        catchError(error => {
          throw error;
        })
      );
  }
}
