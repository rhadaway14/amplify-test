/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onConditionMonitoringDataRecord = /* GraphQL */ `
  subscription OnConditionMonitoringDataRecord($unitNumber: Int!) {
    onConditionMonitoringDataRecord(unitNumber: $unitNumber) {
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
