/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEngine = /* GraphQL */ `
  query GetEngine($id: ID!) {
    getEngine(id: $id) {
      id
      unitNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEngines = /* GraphQL */ `
  query ListEngines(
    $filter: ModelEngineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEngines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unitNumber
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getConditionMonitoringDataRecord = /* GraphQL */ `
  query GetConditionMonitoringDataRecord($id: ID!, $unitNumber: Int!) {
    getConditionMonitoringDataRecord(id: $id, unitNumber: $unitNumber) {
      id
      unitNumber
      dateTime
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listConditionMonitoringDataRecords = /* GraphQL */ `
  query ListConditionMonitoringDataRecords(
    $id: ID
    $unitNumber: ModelIntKeyConditionInput
    $filter: ModelConditionMonitoringDataRecordFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listConditionMonitoringDataRecords(
      id: $id
      unitNumber: $unitNumber
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        unitNumber
        dateTime
        data
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listConditionMonitoringDataRecordsByUnitNumber = /* GraphQL */ `
  query ListConditionMonitoringDataRecordsByUnitNumber(
    $id: ID!
    $unitNumber: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConditionMonitoringDataRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConditionMonitoringDataRecordsByUnitNumber(
      id: $id
      unitNumber: $unitNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        unitNumber
        dateTime
        data
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchConditionMonitoringDataRecords = /* GraphQL */ `
  query SearchConditionMonitoringDataRecords(
    $filter: SearchableConditionMonitoringDataRecordFilterInput
    $sort: [SearchableConditionMonitoringDataRecordSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableConditionMonitoringDataRecordAggregationInput]
  ) {
    searchConditionMonitoringDataRecords(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        unitNumber
        dateTime
        data
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
