/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_latlon_free(a: number): void;
export function __wbg_get_latlon_lat(a: number): number;
export function __wbg_set_latlon_lat(a: number, b: number): void;
export function __wbg_get_latlon_lon(a: number): number;
export function __wbg_set_latlon_lon(a: number, b: number): void;
export function __wbg_region_free(a: number): void;
export function __wbg_get_region_topLeft(a: number): number;
export function __wbg_set_region_topLeft(a: number, b: number): void;
export function __wbg_get_region_bottomRight(a: number): number;
export function __wbg_set_region_bottomRight(a: number, b: number): void;
export function __wbg_gridshape_free(a: number): void;
export function __wbg_get_gridshape_rows(a: number): number;
export function __wbg_set_gridshape_rows(a: number, b: number): void;
export function __wbg_get_gridshape_cols(a: number): number;
export function __wbg_set_gridshape_cols(a: number, b: number): void;
export function __wbg_gribmessage_free(a: number): void;
export function gribmessage_var_name(a: number, b: number): void;
export function gribmessage_var_abbrev(a: number, b: number): void;
export function gribmessage_units(a: number, b: number): void;
export function gribmessage_array_index(a: number, b: number): void;
export function gribmessage_region(a: number): number;
export function gribmessage_grid_shape(a: number): number;
export function gribmessage_forecast_date(a: number): number;
export function gribmessage_reference_date(a: number): number;
export function gribmessage_dataAtLocation(a: number, b: number, c: number, d: number): void;
export function gribmessage_data(a: number): number;
export function gribmessage_locationDataIndex(a: number, b: number, c: number, d: number): void;
export function parseGribMessage(a: number, b: number, c: number): number;
export function parseGribMessages(a: number, b: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_malloc(a: number): number;
