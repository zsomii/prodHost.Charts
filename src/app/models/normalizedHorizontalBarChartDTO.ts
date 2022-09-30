/**
 * ApiGateway
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ChartConfigurationDTO } from './chartConfigurationDTO';
import { ChartTypeDTO } from './chartTypeDTO';
import { SeriesChartDataEntryDTO } from './seriesChartDataEntryDTO';
import { UniqueChartIdDTO } from './uniqueChartIdDTO';

export interface NormalizedHorizontalBarChartDTO { 
    results: Array<SeriesChartDataEntryDTO>;
    chartId: UniqueChartIdDTO;
    configuration: ChartConfigurationDTO;
    chartType: ChartTypeDTO;
    title: string;
    isAvailable: boolean;
}